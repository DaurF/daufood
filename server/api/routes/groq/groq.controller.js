import Groq from 'groq-sdk';


export async function httpConvertToFormat(req, res) {
  const {conversation} = req.body
  const groq = new Groq({apiKey: process.env.GROQ_API_TOKEN});
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {
        "role": "system",
        "content": "Distribute conversations with the AI assistant into two categories: 'Diet, taste preferences, and allergies' and 'Comment on the courier'. Then translate both of them into russian."
      },
      {
        "role": "user",
        "content": "user: Hi.\nagent: Hello! I'm Aruzhan from DauTamaq. May I know if I'm speaking with the person who ordered a healthy meal plan?\nuser: Yes. It's me.\nagent: Great! I'm calling to assist you with your healthy meal plan order. Is it okay if we discuss the details now?\nuser: Yes. Let's proceed.\nagent: Fantastic! To ensure your meal plan meets your needs accurately, could you please share any specific dietary restrictions, food preferences, or allergies you have?\nuser: Yes. I follow cardio diet.\nagent: That's helpful to know! Are there any specific foods you prefer or avoid within the cardio diet?\nuser: Sorry. Repeat question.\nagent: No problem! Within the cardio diet, are there any specific foods you prefer or avoid?\nuser: Yes. I prefer to eat chicken and, uh, avoid again.\nagent: Got it! You prefer \nuser: Hi, Dottam. Avoid the Wakan.\nagent: I'm \nuser: Avocado.\nagent: Thank you for clarifying! You prefer chicken and avoid avocado. Is there anything else you'd like to mention regarding your dietary preferences or restrictions?\nuser: No. That's all.\nagent: Perfect! Now, before finalizing your order, do you have any special instructions or preferences for the preparation or delivery of your meals? For example, would you like us to leave your order at your door, with the receptionist, or with the concierge?\nuser: Uh, just I I will be at home, so he can give it to me at with hands\nagent: Got it! I'll note that down. Your meals will be handed to you directly. Is there anything else you'd like to add or ask before we finalize your order?\nuser: Oh, is that so?\nagent: Yes, that's \nuser: That's all. Cool.\nagent: Thank you for your order! Have a great day!"
      },
      {
        "role": "assistant",
        "content": "1)\n* Я последую за cardio диетой\n* Я предпочитаю есть курицу\n* Я стараюсь избежать авокадо\n* Не упомяну о других ограничениях или аллергиях\n\n2)\n* Курьер может передать заказ лично дома\n* Я будет дома, чтобы получить заказ"
      },
      {
        "role": "user",
        "content": "user: \nagent: Hello!\nuser: So Hello.\nagent: Hello! I'm calling from DauTamaq. May I know if I'm speaking with the person who ordered a healthy meal plan?\nuser: Yes.\nagent: Great! I'm here to assist you with your healthy meal plan order. Is it okay if we discuss the details?\nuser: Yes. Let's go.\nagent: Fantastic! To ensure your meal plan meets your needs accurately, could you please share any specific dietary restrictions, food preferences, or allergies you have?\nuser: I don't have any allergies, and I fall carnivore diets. Carnival, 19.\nagent: Got it! You don't have any allergies, and you follow a carnivore diet. Thank you for sharing that. Now, to confirm your choices, do you have any special preparation or delivery instructions for your order? For example, would you like us to leave your order at your door, with the receptionist, or with the concierge?\nuser: We've done the reception.\nagent: Noted! Your order will be left with the receptionist. Everything seems to be in order. Before we finalize your order, do you have any additional questions or need further assistance with anything else?\nuser: No. Shut up and, uh, goodbye.\nagent: Thank you for your order! Have a great day!"
      },
      {
        "role": "assistant",
        "content": "1)\n* Я не имею аллергий, а я последую за диетой карниворов\n\n2)\n* Курьер должен оставить заказ у рецепшена"
      },
      {
        "role": "user",
        "content": conversation
      },
    ],
    "model": "llama3-70b-8192",
    "temperature": 1,
    "max_tokens": 1024,
    "top_p": 1,
    "stream": true,
    "stop": null
  });

  let result = '';
  for await (const chunk of chatCompletion) {
    result += chunk.choices[0]?.delta?.content || '';
  }

  const chatCompletion1 = await groq.chat.completions.create({
    "messages": [
      {
        "role": "system",
        "content": "Given the structured text, transform each numbered section into a string of complete sentences, ensuring each sentence ends with a period. Then, concatenate these sections into a single string separated by the \"|\" character. Remove any leading asterisks from the items and trim unnecessary whitespace. The output should not include section numbers, and it should appear as one continuous line."
      },
      {
        "role": "user",
        "content": "1)\n* Я последую за cardio диетой\n* Я предпочитаю есть курицу\n* Я стараюсь избежать авокадо\n* Не упомяну о других ограничениях или аллергиях\n\n2)\n* Курьер может передать заказ лично дома\n* Я будет дома, чтобы получить заказ"
      },
      {
        "role": "assistant",
        "content": "'Я последую за cardio диетой. Я предпочитаю есть курицу. Я стараюсь избежать авокадо. Не упомяну о других ограничениях или аллергиях.|Курьер может передать заказ лично дома. Я будет дома, чтобы получить заказ.'"
      },
      {
        "role": "user",
        "content": "1)\n* Я не имею аллергий, а я последую за диетой карниворов\n\n2)\n* Курьер должен оставить заказ у рецепшена"
      },
      {
        "role": "assistant",
        "content": "'Я не имею аллергий, а я последую за диетой карниворов.|Курьер должен оставить заказ у рецепшена.'"
      },
      {
        "role": "user",
        "content": result
      }
    ],
    "model": "llama3-70b-8192",
    "temperature": 1,
    "max_tokens": 1024,
    "top_p": 1,
    "stream": true,
    "stop": null
  });

  let result1 = '';
  for await (const chunk of chatCompletion1) {
    result1 += chunk.choices[0]?.delta?.content || '';
  }

  return res.status(200).json({formatted: result1})
}
