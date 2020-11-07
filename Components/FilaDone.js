class FilaDone{

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

        let deleteBtn = document.createElement('button');
        deleteBtn.className='deleteButton';
        deleteBtn.innerHTML='x';

        let backBtn = document.createElement('button');
        backBtn.className='backButton';
        backBtn.innerHTML= '<';

        let fechaCont =document.createElement('div');
        fechaCont.className='laFecha'
        fechaCont.innerHTML= (
             this.objetoTarea.day +"/"+ this.objetoTarea.month+"/"+this.objetoTarea.year
       
            
         
        );


        component.appendChild(tareaCont);
        component.appendChild(deleteBtn);
        component.appendChild(backBtn);
        component.appendChild(fechaCont);

        deleteBtn.addEventListener('click', () => {
            const database = firebase.database();
            database.ref('Done/'+this.objetoTarea.id).set(null);
            
        });

       

        backBtn.addEventListener('click', ()=> {
            const database = firebase.database();
            database.ref('Doing/'+this.objetoTarea.id).set(this.objetoTarea);
            database.ref('Done/'+this.objetoTarea.id).set(null);
        });
        
        return component;
    }
   

    
}