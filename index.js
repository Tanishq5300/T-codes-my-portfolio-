function createDonutChart(canvasId, label, percent, startColor, endColor) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 300, 0);
    gradient.addColorStop(0, startColor);
    gradient.addColorStop(1, endColor);

    const data = {
        labels: [label],
        datasets: [{
            data: [percent],
            backgroundColor: [gradient],
            borderWidth: 0
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            cutout: '70%',
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `${label}: ${percent}%`;
                        }
                    }
                }
            }
        },
        plugins: [{
            id: 'centerText',
            beforeDraw(chart) {
                const { width, height } = chart;
                const ctx = chart.ctx;
                ctx.restore();
                const fontSize = (height / 7).toFixed(2);
                ctx.font = fontSize + "px sans-serif";
                ctx.textBaseline = "middle";
                const text = percent + "%";
                const textX = Math.round((width - ctx.measureText(text).width) / 2);
                const textY = height / 2;
                ctx.fillStyle = "white";
                ctx.fillText(text, textX, textY);
                ctx.save();
            }
        }]
    };

    new Chart(ctx, config);
}

// 🎯 All Skills
createDonutChart("htmlChart", "HTML", 100, "#ff7e5f", "#feb47b");
createDonutChart("cssChart", "CSS", 90, "#6a11cb", "#2575fc");
createDonutChart("jsChart", "JavaScript", 85, "#f7971e", "#ffd200");
createDonutChart("reactChart", "React.js", 80, "#00c6ff", "#0072ff");
createDonutChart("pythonChart", "Python", 95, "#43cea2", "#185a9d");
createDonutChart("flaskChart", "Flask", 65, "#8e2de2", "#4a00e0");
createDonutChart("mlChart", "ML", 75, "#f2709c", "#ff9472");
createDonutChart("sklearnChart", "Scikit-Learn", 70, "#fc4a1a", "#f7b733");



    function more() {
        let desc = document.getElementsByClassName("more-desc")[0];
        let btn = event.target;

        if (desc.style.display === "none" || desc.style.display === "") {
            desc.style.display = "block";
            btn.textContent = "less";
        } else {
            desc.style.display = "none";
            btn.textContent = "more";
        }
    }
