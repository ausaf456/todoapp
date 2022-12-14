var inp = document.getElementById('inp')
var todoad = document.getElementById('todoad')
var list = document.getElementById('list')


function ad(){
    var valofinp = inp.value
    var valofinpnode = document.createTextNode(valofinp)
    var listu = document.createElement('li')
    listu.setAttribute('class','dotlist')
    listu.appendChild(valofinpnode)
    list.appendChild(listu)


    var dele = document.createElement('button')
    dele.setAttribute('onclick','delet(this)')
    var delenode = document.createTextNode('Delete')
    dele.appendChild(delenode)
    listu.appendChild(dele)




    var edit = document.createElement('BUTTON')
    edit.setAttribute('onclick','editu(this)')
    var nodeedit = document.createTextNode('Edit')
    edit.appendChild(nodeedit)
    listu.appendChild(edit)
    inp.value=''
}


function delet(element){
    element.parentNode.remove()
    

}

function editu(element){
element.parentNode.firstChild.nodeValue=prompt('Edit Your Value',element.parentNode.firstChild.nodeValue)


}

function deleteall(){
    list.innerHTML=""
}