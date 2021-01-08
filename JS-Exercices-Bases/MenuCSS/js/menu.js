let lis = document.getElementsByTagName('li');
for(let l of lis){
    console.log(l.children.length);
    if(l.children.length > 0){
        l.onmousedown = function(e){
            console.log(e.currentTarget.children[0]);
            let menu_tmp = e.currentTarget.children[0];
            menu_tmp.classList.toggle('visible');

        }
    }
}