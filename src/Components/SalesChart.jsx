import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
     display: false
    },
   
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
  {
    label: "Service",
    data: [45, 60, 35, 20, 30, 45,65],
    backgroundColor: "#A9DFD8",
    barThickness: 20,
    borderRadius: 7,
    grouped: false,
},

{
    label: "Volume",
    data: [90, 100, 90, 50, 70, 50,88],
    backgroundColor: "#2B2B36",
    barThickness: 20,
    borderRadius: 7,
    grouped: false,
  },
]
};

 function SalesChart() {
  return <Bar options={options} data={data} />;
}


export default SalesChart
