import { PDFDocument } from 'pdf-lib'
import { Step } from './store'

export async function exportPDF(steps: Step[]) {
  const pdf = await PDFDocument.create()
  const page = pdf.addPage([600, 800])
  const text = steps.map(s =>
    `${new Date(s.timestamp).toLocaleTimeString()} - ${s.action}: ${s.details}`
  ).join('\n')
  page.drawText('Workflow Steps:\n\n' + text, { x: 50, y: 750, size: 12 })

  const bytes = await pdf.save()
  const blob = new Blob([bytes], { type: 'application/pdf' })
  const url = URL.createObjectURL(blob)
  window.open(url)
}
