$(document).ready(function() {
    $('form').on('submit', function(event) {
      event.preventDefault();
      var prompt = $('input[name="prompt"]').val();
      var maxTokens = parseInt($('input[name="max_tokens"]').val());
      var temperature = parseFloat($('input[name="temperature"]').val());
      var k = parseInt($('input[name="k"]').val());
      var stopSequences = $('input[name="stop_sequences"]').val().split(',');
  
      generateContent(prompt, maxTokens, temperature, k, stopSequences);
    });
  
    $('#download-words').on('click', function() {
      downloadContentAsFile('.doc');
    });
  
    $('#download-docs').on('click', function() {
      downloadContentAsFile('.docx');
    });
  
    $('#download-pdf').on('click', function() {
      downloadContentAsPDF();
    });
  });
  
  function generateContent(prompt, maxTokens, temperature, k, stopSequences) {
    $.ajax({
      type: 'POST',
      url: '{% url "generate" %}',
      data: {
        'prompt': prompt,
        'max_tokens': maxTokens,
        'temperature': temperature,
        'k': k,
        'stop_sequences': stopSequences.join(','),
        'csrfmiddlewaretoken': '{{ csrf_token }}'
      },
      beforeSend: function() {
        $('#result').html('Generating content...');
        $('.copy-icon').css('opacity', 0);
      },
      success: function(response) {
        var content = response.content;
        animateText(content, 0);
        showCopyIcon();
      },
      error: function(xhr, errmsg, err) {
        console.log(errmsg);
      }
    });
  }
  
  function animateText(text, index) {
    if (index < text.length) {
      $('#result').append(text[index]);
      index++;
      setTimeout(function() {
        animateText(text, index);
      }, 10);
    }
  }
  
  function showCopyIcon() {
    $('.copy-icon').css('opacity', 1);
  }
  
  function copyContent() {
    var text = $('#result').text().trim();
    var tempInput = $('<input>');
    $('body').append(tempInput);
    tempInput.val(text).select();
    document.execCommand('copy');
    tempInput.remove();
    $('.copy-icon').addClass('copied clicked');
    setTimeout(function() {
      $('.copy-icon').removeClass('clicked');
    }, 500);
  }
  
  function downloadContentAsFile(extension) {
    var text = $('#result').text().trim();
    var filename = 'content' + extension;
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  
  function downloadContentAsPDF() {
    var element = document.getElementById('result');
    var opt = {
      filename: 'content.pdf',
      margin: [10, 10, 10, 10],
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  }
  