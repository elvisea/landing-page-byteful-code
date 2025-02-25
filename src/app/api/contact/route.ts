import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

// Cores do tema da aplicação
const colors = {
  primary: '#1d4ed8', // blue-600
  primaryLight: '#3b82f6', // blue-500
  secondary: '#f8fafc', // slate-50
  accent: '#2563eb', // blue-600
  text: {
    primary: '#111827', // gray-900
    secondary: '#4b5563', // gray-600
    light: '#9ca3af', // gray-400
    white: '#ffffff',
  },
  border: '#e5e7eb', // gray-200
}

// Definindo a interface para os dados do formulário
interface FormData {
  name: string
  email: string
  phone?: string
  company?: string
  projectType: string
  budget: string
  timeline: string
  description: string
  contactPreference: string
  services: string[]
  termsAccepted: boolean
}

// Template de email para a empresa
const getCompanyEmailTemplate = (data: FormData) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6; 
          color: ${colors.text.primary}; 
          margin: 0;
          padding: 0;
          background-color: #f3f4f6;
        }
        .container { 
          max-width: 600px; 
          margin: 20px auto;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .header { 
          background: linear-gradient(to right, ${colors.primary}, ${colors.primaryLight});
          color: white;
          padding: 24px 8px;
          text-align: center;
        }
        .header h2 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        .content { 
          padding: 24px 8px;
          background: white;
        }
        .info-group {
          margin-bottom: 24px;
          padding: 20px;
          background: ${colors.secondary};
          border-radius: 8px;
        }
        .info-item { 
          margin: 12px 0;
          display: flex;
          align-items: flex-start;
        }
        .label { 
          font-weight: 600;
          color: ${colors.accent};
          width: 140px;
          flex-shrink: 0;
        }
        .value {
          color: ${colors.text.secondary};
        }
        .footer { 
          text-align: center;
          padding: 24px;
          background: ${colors.secondary};
          color: ${colors.text.light};
          font-size: 14px;
        }
        .divider {
          height: 1px;
          background: ${colors.border};
          margin: 24px 0;
        }
        @media (min-width: 640px) {
          .container {
            margin: 40px auto;
          }
          .header {
            padding: 32px;
          }
          .content {
            padding: 32px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Nova Solicitação de Projeto</h2>
        </div>
        <div class="content">
          <div class="info-group">
            <h3 style="margin-top: 0; color: ${colors.text.primary}">Informações do Cliente</h3>
            <div class="info-item">
              <span class="label">Nome:</span>
              <span class="value">${data.name}</span>
            </div>
            <div class="info-item">
              <span class="label">Email:</span>
              <span class="value">${data.email}</span>
            </div>
            <div class="info-item">
              <span class="label">Telefone:</span>
              <span class="value">${data.phone || 'Não informado'}</span>
            </div>
            <div class="info-item">
              <span class="label">Empresa:</span>
              <span class="value">${data.company || 'Não informado'}</span>
            </div>
          </div>

          <div class="info-group">
            <h3 style="margin-top: 0; color: ${colors.text.primary}">Detalhes do Projeto</h3>
            <div class="info-item">
              <span class="label">Tipo:</span>
              <span class="value">${data.projectType}</span>
            </div>
            <div class="info-item">
              <span class="label">Orçamento:</span>
              <span class="value">${data.budget}</span>
            </div>
            <div class="info-item">
              <span class="label">Prazo:</span>
              <span class="value">${data.timeline}</span>
            </div>
            <div class="info-item">
              <span class="label">Serviços:</span>
              <span class="value">${data.services.join(', ')}</span>
            </div>
            <div class="info-item">
              <span class="label">Contato Preferido:</span>
              <span class="value">${data.contactPreference}</span>
            </div>
          </div>

          <div class="info-group">
            <h3 style="margin-top: 0; color: ${colors.text.primary}">Descrição do Projeto</h3>
            <p style="color: ${colors.text.secondary}; margin: 0;">${data.description}</p>
          </div>
        </div>
        <div class="footer">
          <strong>BytefulCode</strong><br>
          Desenvolvimento Web & Mobile
        </div>
      </div>
    </body>
  </html>
`

// Template de email para o cliente
const getClientEmailTemplate = (data: FormData) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6; 
          color: ${colors.text.primary}; 
          margin: 0;
          padding: 0;
          background-color: #f3f4f6;
        }
        .container { 
          max-width: 600px; 
          margin: 20px auto;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .header { 
          background: linear-gradient(to right, ${colors.primary}, ${colors.primaryLight});
          color: white;
          padding: 24px 8px;
          text-align: center;
        }
        .header h2 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        .content { 
          padding: 24px 8px;
          background: white;
        }
        .thank-you {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 24px;
          color: ${colors.text.primary};
        }
        .next-steps {
          background: ${colors.secondary};
          padding: 24px;
          border-radius: 8px;
          margin: 24px 0;
        }
        .next-steps h3 {
          color: ${colors.accent};
          margin-top: 0;
        }
        .next-steps p {
          margin: 8px 0;
          color: ${colors.text.secondary};
        }
        .contact-info {
          background: ${colors.secondary};
          padding: 24px;
          border-radius: 8px;
          margin-top: 24px;
        }
        .contact-info h3 {
          color: ${colors.accent};
          margin-top: 0;
        }
        .contact-method {
          display: flex;
          align-items: center;
          margin: 12px 0;
          color: ${colors.text.secondary};
        }
        .footer { 
          text-align: center;
          padding: 24px;
          background: ${colors.secondary};
          color: ${colors.text.light};
          font-size: 14px;
        }
        @media (min-width: 640px) {
          .container {
            margin: 40px auto;
          }
          .header {
            padding: 32px;
          }
          .content {
            padding: 32px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Recebemos sua Solicitação!</h2>
        </div>
        <div class="content">
          <p class="thank-you">Olá ${data.name},</p>
          
          <p>Agradecemos seu interesse em nossos serviços! Recebemos sua solicitação de projeto e estamos muito animados para discutir como podemos ajudar a transformar sua ideia em realidade.</p>
          
          <div class="next-steps">
            <h3>Próximos Passos</h3>
            <p>✓ Nossa equipe está analisando sua solicitação</p>
            <p>✓ Entraremos em contato em até 24 horas úteis</p>
            <p>✓ Agendaremos uma reunião para discutir os detalhes do seu projeto</p>
          </div>

          <p>Conforme sua preferência, entraremos em contato via <strong>${data.contactPreference}</strong>.</p>
          
          <div class="contact-info">
            <h3>Precisa Falar Conosco?</h3>
            <div class="contact-method">
              📧 Email: ${process.env.EMAIL_CONTACT}
            </div>
            <div class="contact-method">
              📱 WhatsApp: ${process.env.PHONE_NUMBER}
            </div>
            <div class="contact-method">
              📍 São Paulo, SP - Brasil
            </div>
          </div>
        </div>
        <div class="footer">
          <strong>BytefulCode</strong><br>
          Transformando Ideias em Código
        </div>
      </div>
    </body>
  </html>
`

export async function POST(request: Request) {
  try {
    const body: FormData = await request.json()

    // Email para a empresa
    const companyMailOptions = {
      from: process.env.SMTP_USER,
      to: 'contato@bytefulcode.tech',
      subject: `Nova Solicitação de Projeto - ${body.name}`,
      html: getCompanyEmailTemplate(body),
    }

    // Email para o cliente
    const clientMailOptions = {
      from: process.env.SMTP_USER,
      to: body.email,
      subject: 'Recebemos sua solicitação - BytefulCode',
      html: getClientEmailTemplate(body),
    }

    // Enviar ambos os emails
    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(clientMailOptions),
    ])

    return NextResponse.json(
      { message: 'Email enviado com sucesso' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return NextResponse.json(
      { message: 'Erro ao enviar email' },
      { status: 500 }
    )
  }
} 