// Função para filtrar os cursos com base no texto da pesquisa
document.getElementById('searchInput').addEventListener('input', function() {
    let searchValue = this.value.toLowerCase(); // Obter o valor digitado na caixa de pesquisa
    let courses = document.querySelectorAll('.course'); // Selecionar todos os cursos

    // Para cada curso, verificar se o 'data-day' corresponde ao valor da pesquisa
    courses.forEach(course => {
        let day = course.getAttribute('data-day'); // Pegar o atributo 'data-day' do curso
        if (day.includes(searchValue)) {
            course.style.display = 'block'; // Mostrar o curso
        } else {
            course.style.display = 'none'; // Ocultar o curso se não corresponder
        }
    });
});