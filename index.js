const biker = (function () {
  function data(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open("GET", url)
      xhr.onload = function () {
        if (xhr.status === 200) {
          const parser = new DOMParser()
          const doc = parser.parseFromString(xhr.response, "text/html")

          const data = {}
          data.title = doc.querySelector("title").innerText
          data.header = doc.querySelector("h1").innerText
          data.paragraphs = []
          const paragraphs = doc.querySelectorAll("p")
          for (let i = 0; i < paragraphs.length; i++) {
            data.paragraphs.push(paragraphs[i].innerText)
          }
          data.links = []
          const links = doc.querySelectorAll("a")
          for (let i = 0; i < links.length; i++) {
            data.links.push(links[i].href)
          }
          resolve(data)
        } else {
          reject(`Error: ${xhr.status}`)
        }
      }
      xhr.onerror = function () {
        reject("Error: Network Error")
      }
      xhr.send()
    })
  }

  return {
    data,
  }
})()

module.exports = biker
