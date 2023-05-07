from django.shortcuts import render

import cohere

COHERE_API_KEY = 'BwCfMf2xNrEOxHz26N56JuTvmihY36v8eYe0EEfn'

def generate_content(prompt):
    client = cohere.Client(COHERE_API_KEY)
    response = client.generate( 
        model='command-xlarge-nightly',
        prompt=prompt,
        max_tokens=300,
        temperature=0.9,
        k=0,
        stop_sequences=[],
       
        return_likelihoods='NONE')
    return response.generations[0].text


def generate(request):
    if request.method == 'POST':
        prompt = request.POST.get('prompt')
        content = generate_content(prompt)
        return render(request, 'result.html', {'content': content})
    return render(request, 'generate.html')
