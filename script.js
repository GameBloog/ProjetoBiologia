// Aguarde o carregamento completo do documento antes de executar o código JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Adicione um evento de clique a cada item do menu
  var menuItems = document.querySelectorAll("nav a")
  menuItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault() // Evita o comportamento padrão de clique em links
      var pageUrl = this.getAttribute("href") // Obtém o URL da página associada ao item do menu
      loadPage(pageUrl) // Carrega a página associada
    })
  })

  // Função para carregar uma página via AJAX e exibi-la na seção principal
  function loadPage(url) {
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = xhr.responseText
        var mainSection = document.querySelector("main")
        mainSection.innerHTML = response
      }
    }
    xhr.open("GET", url, true)
    xhr.send()
  }
})
