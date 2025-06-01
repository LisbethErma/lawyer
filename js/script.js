// Инициализация круговых диаграмм для страницы адвокатов
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('chart1')) {
        // Данные для диаграмм (можно заменить на реальные)
        const lawyersData = [
            { wins: 85, losses: 15, color: '#3498db' }, // Иванов
            { wins: 78, losses: 22, color: '#e74c3c' }, // Петрова
            { wins: 92, losses: 8, color: '#2ecc71' }   // Сидоров
        ];
        
        // Создаем диаграммы для каждого адвоката
        lawyersData.forEach((data, index) => {
            const ctx = document.getElementById(`chart${index+1}`).getContext('2d');
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Выигранные дела', 'Проигранные дела'],
                    datasets: [{
                        data: [data.wins, data.losses],
                        backgroundColor: [data.color, '#ecf0f1'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: false,
                    cutout: '70%',
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                boxWidth: 12,
                                padding: 20,
                                font: {
                                    family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                    size: 12
                                }
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return `${context.label}: ${context.raw}%`;
                                }
                            }
                        }
                    }
                }
            });
        });
    }
    
    // Обработка формы контактов
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
            this.reset();
        });
    }
});