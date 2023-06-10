from django.shortcuts import render
from django.http import JsonResponse
import cohere

COHERE_API_KEY = 'BwCfMf2xNrEOxHz26N56JuTvmihY36v8eYe0EEfn'

def generate_content(prompt, max_tokens=300, temperature=0.9, k=0, stop_sequences=None):
    client = cohere.Client(COHERE_API_KEY)
    
    # Check if stop_sequences is empty and set it to None if it is
    if stop_sequences is not None and len(stop_sequences) == 0:
        stop_sequences = None
    
    response = client.generate(
        model='command-xlarge-nightly',
        prompt=prompt,
        max_tokens=max_tokens,
        temperature=temperature,
        k=k,
        stop_sequences=stop_sequences,
        return_likelihoods='NONE'
    )
    return response.generations[0].text


def generate(request):
    if request.method == 'POST':
        prompt = request.POST.get('prompt')
        content = generate_content(prompt)
        return JsonResponse({'content': content})
    return render(request, 'generate.html')
