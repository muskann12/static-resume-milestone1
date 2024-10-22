document.addEventListener("DOMContentLoaded", () => {
   
    const skills = document.querySelectorAll('.skill-progress');

    
    skills.forEach(skill => {
        const progress = skill.getAttribute('data-progress'); 
        
        const progressBar:any = document.createElement('div'); 
        progressBar.classList.add('skill-progress-inner'); 
        progressBar.style.width = '0'; 
        
        skill.appendChild(progressBar); 

       
        setTimeout(() => {
            progressBar.style.width = progress;
        }, 100); 
    });
});
