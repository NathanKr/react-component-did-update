<h2>Motivation</h2>
Experiment with componentDidUpdate

<h2>Points of interest</h2>
<ul>
<li>componentDidUpdate is part of the component life cycle api</li>
<li>componentDidMount is called when ever the component is updated</li>
<li>component is updated on 3 use scenarios : the component state is changed ,the component props are changed , the component call forceUpdate</li>
<li>use componentDidUpdate to run side effects on update</li>
<li>componentDidUpdate recive 3 arguments prevProps, prevState, snapshot. here we use prevProps to eliminate infinite loop</li>
</ul>
