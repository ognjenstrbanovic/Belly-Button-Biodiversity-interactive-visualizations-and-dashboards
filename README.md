# interactive-visualizations-and-dashboards-challenge
As the name suggests, an interactive dashboard will be built... interestingly, though, it will catalog "the microbes that colonize human navels", or belly buttons.  
Step 1: use Plotly (a library built for use in multiple languages) for JS to do a whole host of operations...  
First off, I used D3.js to read a JSON file. Then, I created a relatively long series of interactive horizontal bar charts that used the given dropdown menu's newly built functionality to diplay the top 10 OTUs - Operational Taxonomic Units - found in each individual. (The dashboard, of course, updates whenever the value in the dropdown is changed by the user.) After that, the task was to create interactive bubble charts for each sample (with a larger bubble, for instance, representing a greater OTU). And, finally, I was to display the "sample metadata", or each individual's demographic information, as a key-value pair.  
Please view the result below:  




There was a bonus task that I was unable to complete, and that was to add a "gauge chart" (which can be found in the Plotly documentation). This was to plot the weekly scrubbing/washing frequency of each individual...  
Anyway, still feeling fulfilled, I have deployed my "app to a free static page hosting service", GitHub Pages, and it can be viewed here: https://ognjenstrbanovic.github.io/interactive-visualizations-and-dashboards-challenge/.  

Also, directly below this line, you can find what I learned this week...  

**Objectives for *Interactive Visualizations and Dashboard* Unit**:  
- Use Plotly to create basic charts, including bar charts and line charts.
- Use Plotly's layout object to customize the appearance of their charts.
- Annotate charts with labels, text, and hover text.
- Use JavaScript's math library to generate random integers.
- Use advanced JavaScript methods to manipulate data.
- Manipulate charts through dropdown events and click events.
- Create charts using data from API calls.
- Use Plotly.restyle() to create dynamic charts.
- Use switch statements to direct control flow in JavaScript.
- Create advanced dynamic charts, such as candlestick charts.
- Create and deploy custom dashboards.
