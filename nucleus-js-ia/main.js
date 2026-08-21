import './style.css'
import { createOpenRouter } from '@openrouter/ai-sdk-provider'
import { generateText, streamText } from 'ai'

const openRoute = createOpenRouter({
    api_keys=import.meta.env.VITE_OPENROUTER_KEY
})

const form = document.querySelector('#form')

form.addEventListener('submit', async e => {
    e.preventDefault();

    const pront = document.querySelector('#pront').value
    console.log("🚀 ~ pront:", pront)
    if (pront.trim() === '') alert('La consulta no puede ir vacia ')

    const result = streamText({
        model: openRoute('google/gemini-2.5-pro-exp-03-25 : free'),
        // model: openRoute('deepseek/deepseek-chat- v3-0324 : free'),
        // model: openRoute('qwen/qwen2.5-vI-32b-instruct : free'),

        prompt
    })

    for await (const text of result.textStream) {
        console.log(text)
    }

})