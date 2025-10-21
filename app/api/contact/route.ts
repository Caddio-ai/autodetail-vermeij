import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, email, message, honeypot } = body
    
    // Check honeypot (anti-spam)
    if (honeypot) {
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 })
    }
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Naam, e-mail en bericht zijn verplicht' },
        { status: 400 }
      )
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ongeldig e-mailadres' },
        { status: 400 }
      )
    }
    
    // Prepare email content
    const emailContent = `
      <h2>Nieuw contactformulier bericht</h2>
      <p><strong>Naam:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefoon:</strong> ${body.phone || 'Niet opgegeven'}</p>
      <p><strong>Automerk:</strong> ${body.carMake || 'Niet opgegeven'}</p>
      <p><strong>Automodel:</strong> ${body.carModel || 'Niet opgegeven'}</p>
      <p><strong>Bericht:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      
      <hr>
      <p><small>Dit bericht is verzonden via het contactformulier op autodetail-vermeij.nl</small></p>
    `
    
    // Send email (only if RESEND_API_KEY is configured)
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'Autodetail Vermeij <noreply@autodetail-vermeij.nl>',
          to: ['info@autodetail-vermeij.nl'],
          subject: `Nieuw contactformulier bericht van ${name}`,
          html: emailContent,
        })
      } catch (emailError) {
        console.error('Email sending failed:', emailError)
        // Don't fail the request if email fails
      }
    }
    
    // Log the submission (for debugging)
    console.log('Contact form submission:', {
      name,
      email,
      phone: body.phone,
      carMake: body.carMake,
      carModel: body.carModel,
      message: message.substring(0, 100) + '...',
      timestamp: new Date().toISOString(),
    })
    
    return NextResponse.json({ success: true })
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Er is een fout opgetreden. Probeer het later opnieuw.' },
      { status: 500 }
    )
  }
}
