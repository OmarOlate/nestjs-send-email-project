import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { SendEmailDto } from "src/common";
import { createTransport } from "src/config/nodemailer";
import * as sanitizeHtml from 'sanitize-html';

@Processor('email-queue')
export class EmailProcessor{ 
    @Process('send-email')
    async handleSendEmail(job: Job<SendEmailDto>){
        const {smtpConfig, mailOptions} = job.data;

        let sanitizedHtml = sanitizeHtml(mailOptions.html,{
            allowedTags: sanitizeHtml.defaults.allowedTags.concat([
                'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'header', 'footer', 'section', 'article',
                'div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'img', 'strong', 'em', 'b', 'i', 'u',
                'ul', 'ol', 'li', 'br', 'hr', 'blockquote', 'pre', 'code', 'sub', 'sup',
              ]), // Usar etiquetas por defecto de sanitize-html y añadir más
              allowedAttributes: {
                '*': ['style', 'class', 'id', 'align', 'valign'], // Permitir atributos comunes en cualquier etiqueta
                'a': ['href', 'target', 'rel'], // Atributos específicos para enlaces
                'img': ['src', 'alt', 'width', 'height', 'border'], // Atributos para imágenes
                'table': ['border', 'cellpadding', 'cellspacing', 'width'], // Atributos para tablas
                'td': ['colspan', 'rowspan'], // Atributos para celdas
              },
              allowedStyles: {
                '*': {
                  // Ser más permisivo con los estilos
                  'background': [/.*/], // Permitir cualquier valor de background
                  'background-color': [/.*/], // Cualquier color
                  'color': [/.*/], // Cualquier color
                  'font': [/.*/], // Permitir cualquier combinación de fuente
                  'font-family': [/.*/], // Cualquier familia de fuentes
                  'font-size': [/.*/], // Cualquier tamaño (px, em, rem, etc.)
                  'font-weight': [/.*/], // Cualquier peso (bold, normal, 700, etc.)
                  'font-style': [/.*/], // Cualquier estilo (italic, normal, etc.)
                  'padding': [/.*/], // Cualquier valor de padding
                  'margin': [/.*/], // Cualquier valor de margin
                  'text-align': [/.*/], // Cualquier alineación
                  'text-decoration': [/.*/], // Cualquier decoración
                  'display': [/.*/], // Cualquier valor de display
                  'width': [/.*/], // Cualquier ancho
                  'height': [/.*/], // Cualquier alto
                  'max-width': [/.*/], // Cualquier ancho máximo
                  'max-height': [/.*/], // Cualquier alto máximo
                  'border': [/.*/], // Cualquier borde
                  'border-radius': [/.*/], // Cualquier radio
                  'box-shadow': [/.*/], // Cualquier sombra
                  'line-height': [/.*/], // Altura de línea
                  'letter-spacing': [/.*/], // Espaciado de letras
                  'vertical-align': [/.*/], // Alineación vertical
                },
              },
              allowedClasses: {
                '*': [/.*/], // Permitir cualquier clase en cualquier etiqueta
              },
              // Permitir iframes y otros contenidos embebidos si es necesario (opcional)
              allowedIframeHostnames: [], // Dejar vacío para no permitir iframes por ahora
              // Bloquear explícitamente scripts y contenido peligroso
              disallowedTagsMode: 'discard', // Descarta etiquetas no permitidas como <script>
        }); 

        const transporter = createTransport(smtpConfig);

        try{
            await transporter.sendMail({
                ...mailOptions,
                html: sanitizedHtml,
            });
        }catch(error){
            throw new Error(`Error to send email from processor: ${String(error)}`);
        }
    }
}