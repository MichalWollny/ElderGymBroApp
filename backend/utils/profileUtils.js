export function getDefaultAvatar(gender) {
  switch (gender) {
    case 'male':
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/B%26W_Portrait_of_H._P._Lovecraft.svg/512px-B%26W_Portrait_of_H._P._Lovecraft.svg.png';
    case 'female':
      return 'https://i.seadn.io/gae/k01LjPxdfW0LhgSjNksj3KhPIbskLJb-B27latpNhb9fHEJqcoOlVX9RcRInKdQTWekaTF70-tGzxv_F_wACE-77Dlm1qSH4kayE-A?auto=format&dpr=1&w=1000';
    case 'elder thing':
      return 'https://i.pinimg.com/474x/6c/92/36/6c923664f3c5fa0715fa82627a2fa04e.jpg';
    case 'blob':
      return 'https://t3.ftcdn.net/jpg/05/59/68/54/360_F_559685420_ZyC3yn4khaJ6gptajKVUPAs1Bl8kUvEL.jpg';
    case 'other':
      return 'https://e7.pngegg.com/pngimages/869/87/png-clipart-shoggoth-%E3%81%84%E3%82%89%E3%81%99%E3%81%A8%E3%82%84-illustrator-cthulhu-mythos-cthulhu-illustrator-fictional-character.png';
    default:
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/B%26W_Portrait_of_H._P._Lovecraft.svg/512px-B%26W_Portrait_of_H._P._Lovecraft.svg.png'; // default to male
  }
}
