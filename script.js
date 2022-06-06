var app = {
   data: data,
   html: {
      searchbar: document.querySelectorAll('.search input')[0],
      display: document.querySelectorAll('.display')[0],
      count: document.querySelectorAll('.count')[0]
   },
   init:function(){
      app.render();
      app.html.searchbar.addEventListener('keyup', function(){
         app.search(this.value)
      })
   },
   render: function(){
      app.html.display.innerHTML = ''
      app.data.forEach(function(item){
          app.html.display.innerHTML += `
            <div class="item">
                <table onclick="window.location.href='${item.description}'">
                    <td class="tdicon"><i class="fa fa-file-pdf-o" style="font-size:36px;"></i></td>
                    <td width="100%">
                        <div>
                            <div class="title">${item.title}</div>
                            <div class="description">${item.description}</div>
                            <div class="description">${item.typ}</div>
                        </div>
                    </td>
                </table>
            </div>
         `;
      });
      app.html.items = document.querySelectorAll('.item')
   },
   search: function(term){
      var count = app.data.length;
      app.data.forEach(function(item, index){
         var html = app.html.items[index]
         html.classList.remove('show')
         if(item.title.toLowerCase().indexOf(term.toLowerCase()) == -1){
            html.classList.add('hide')
            count--
         } else {
            if(html.classList.contains('hide')){
               html.classList.remove('hide')
               html.classList.add('show')
            }
         }
      })
      app.html.count.innerHTML = count;
   }
}

app.init();
setTimeout(function(){
   app.search('cobol')
}, 500)
setTimeout(function(){
   app.search('')
}, 1500)