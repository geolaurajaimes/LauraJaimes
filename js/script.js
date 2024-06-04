document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const projects = document.querySelectorAll('.project');
    let currentIndex = 0;

    const showProject = index => {
        projects.forEach((project, idx) => {
            project.style.display = idx === index ? 'block' : 'none';
        });
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? projects.length - 1 : currentIndex - 1;
        showProject(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === projects.length - 1) ? 0 : currentIndex + 1;
        showProject(currentIndex);
    });

    showProject(currentIndex);
});
