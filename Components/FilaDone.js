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


        component.appendChild(tareaCont);
        component.appendChild(deleteBtn);
        component.appendChild(backBtn);

        deleteBtn.addEventListener('click', () => {
            const database = firebase.database();
            database.ref('To Do/'+this.objetoTarea.id).set(null);
            
        });

        backBtn.addEventListener('click', ()=> {
            const database = firebase.database();
            database.ref('Doing/'+this.objetoTarea.id).set(this.objetoTarea);
            database.ref('Done/'+this.objetoTarea.id).set(null);
        });
        
        return component;
    }
   

    
}