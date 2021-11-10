let header = document.getElementById('header');
let pesoProdu = JSON.parse(sessionStorage.produtos);


        function add(){
            let vcanal = sessionStorage.canal;
            let endere = sessionStorage.ender;
            let tel = sessionStorage.telefone;          

            document.getElementById('nome').innerHTML = '<strong>Nome/Empresa:</strong> ' + vcanal;
            document.getElementById('endereco').innerHTML = '<strong>Endereço:</strong> ' + endere;
            document.getElementById('telefone').innerHTML = '<strong>Telefone:</strong> ' + tel;
             
           

            for (let i = 0; i < pesoProdu.length ; i++){
                if(i % 2 == 0){
                    let recebe = document.getElementById('max');
                    let p = document.createElement('p');
                    p.style.backgroundColor = '#757A77';
                    p.innerText = pesoProdu[i];
                    recebe.appendChild(p);
                } else {
                let recebe = document.getElementById('max');
                let p = document.createElement('p');
                p.innerText = pesoProdu[i];
                recebe.appendChild(p);
                }
            }
            
        }

        function criar(){
            document.getElementById('blockImprimir').style.display='none';
            window.print();
        }

        

        window.addEventListener('load', add);
            
            




   



