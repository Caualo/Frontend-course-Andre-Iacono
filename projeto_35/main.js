const facebookButton = document.getElementById('facebook-button');
const twitterButton = document.getElementById('twitter-button');

function shareOnFacebook() {
    //Usando o metodo "encodeURIcomponent" para transformar os caracteres especiais da minha pagina em uma versão segura para ser usada em links e codificada , e o "windows.location.href" pega o Url da minha pagina atual.
    const url = encodeURIComponent(window.location.href);
    //Insere a minha URl na pagina de compartilhamento do facebook
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    //Usa metodo window.open para abrir parametro passado, nesse caso o "shareUrl" e usa o parametro '_blank' para abrir a janela em nova aba.
    window.open(shareUrl, '_blank');
}

function shareOnTwitter() {
  const text = encodeURIComponent('Check out this website:');
  const url = encodeURIComponent(window.location.href);
  const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
  window.open(shareUrl, '_blank');
}

facebookButton.addEventListener('click', shareOnFacebook);
twitterButton.addEventListener('click', shareOnTwitter);

