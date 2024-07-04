export function getDefaultAvatar(gender) {
  if ('') {
    return 'unknown';
  } else if ('male') {
    return 'https://i.pinimg.com/736x/3e/42/b1/3e42b1c802226a211c690c9b02d06ffd.jpg';
  } else if ('female') {
    return 'https://i.seadn.io/gae/k01LjPxdfW0LhgSjNksj3KhPIbskLJb-B27latpNhb9fHEJqcoOlVX9RcRInKdQTWekaTF70-tGzxv_F_wACE-77Dlm1qSH4kayE-A?auto=format&dpr=1&w=1000';
  } else if ('elder thing') {
    return 'https://i.pinimg.com/474x/6c/92/36/6c923664f3c5fa0715fa82627a2fa04e.jpg';
  } else if ('blob') {
    return 'https://t3.ftcdn.net/jpg/05/59/68/54/360_F_559685420_ZyC3yn4khaJ6gptajKVUPAs1Bl8kUvEL.jpg';
  } else if ('other') {
    return 'https://e7.pngegg.com/pngimages/869/87/png-clipart-shoggoth-%E3%81%84%E3%82%89%E3%81%99%E3%81%A8%E3%82%84-illustrator-cthulhu-mythos-cthulhu-illustrator-fictional-character.png';
  }
}
