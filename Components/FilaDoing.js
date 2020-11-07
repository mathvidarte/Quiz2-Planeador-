class FilaDoing {

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

        let backBtn = document.createElement('button');
        backBtn.className='backButton';
        backBtn.innerHTML= '<';


        component.appendChild(tareaCont);
        component.appendChild(deleteBtn);
        component.appendChild(nextBtn);
        component.appendChild(backBtn);
        component.appendChild(fechaCont);

        deleteBtn.addEventListener('click', () => {
            const database = firebase.database();
            database.ref('Doing/'+this.objetoTarea.id).set(null);
            
        });

        nextBtn.addEventListener('click', ()=> {
            const database = firebase.database();
            database.ref('Done/'+this.objetoTarea.id).set(this.objetoTarea);
            database.ref('Doing/'+this.objetoTarea.id).set(null);
        });

        backBtn.addEventListener('click', () => {
            const database = firebase.database();
            database.ref('To Do/'+this.objetoTarea.id).set(this.objetoTarea);
            database.ref('Doing/'+this.objetoTarea.id).set(null);
        })
        
        return component;
    }
   

    
}