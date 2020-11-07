class FilaTarea {

    constructor(objetoTarea) {
        this.objetoTarea = objetoTarea;

    }
    

    render = () => {
        let component =document.createElement('div');
        component.className='filasTarea';

        let tareaCont =document.createElement('div');
        tareaCont.className='elTexto'
        tareaCont.innerHTML= (
            this.objetoTarea.t
          
        );

        let fechaCont =document.createElement('div');
        fechaCont.className='laFecha'
        fechaCont.innerHTML= (
             this.objetoTarea.day +"/"+ this.objetoTarea.month+"/"+this.objetoTarea.year
       
            
         
        );

        let deleteBtn = document.createElement('button');
        deleteBtn.className='deleteButton';
        deleteBtn.innerHTML='x';

        let nextBtn = document.createElement('button');
        nextBtn.className='nextButton';
        nextBtn.innerHTML= '>';



    

        deleteBtn.addEventListener('click', () => {
            const database = firebase.database();
            database.ref('To Do/'+this.objetoTarea.id).set(null);
            
        });

        nextBtn.addEventListener('click', ()=> {
            const database = firebase.database();
            database.ref('Doing/'+this.objetoTarea.id).set(this.objetoTarea);
            database.ref('To Do/'+this.objetoTarea.id).set(null);
         
        });


        component.appendChild(tareaCont);
        component.appendChild(deleteBtn);
        component.appendChild(nextBtn);
        component.appendChild(fechaCont);
        
        return component;
    }
   

    
}