google.load("visualization", "1", {packages: ["timeline"]});
google.setOnLoadCallback(drawChart);


//auto-resizing of google timeline issue to be revisited at
//a future.  check out:
//http://codepen.io/jondlm/pen/doijJ

function drawChart() {
  var container = document.getElementById('timeline');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: 'string', id: 'Item' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
    [ 'Free',
    new Date(2015, 1, 2, 7, 0, 0),
    new Date(2015, 1, 2, 10, 0, 0)
    ],
    [ 'Free',
    new Date(2015, 1, 2, 16, 0, 0),
    new Date(2015, 1, 2, 18, 0, 0)
    ],
    [ 'Training Session', new Date(2015, 1, 2, 10, 0, 0), new Date(2015, 1, 2, 11, 0, 0) ],
    [ 'Phone Call', new Date(2015, 1, 2, 11, 0, 0), new Date(2015, 1, 2, 14, 30, 0) ],
    [ 'Training Plan', new Date(2015, 1, 2, 14, 30, 0), new Date (2015, 1, 2, 16, 0, 0) ]]);
    var options = {
      colors: ['#4D5360', '#51C1DC', '#F3AB58', '#DD5552'],
      timeline: {
        rowLabelStyle: {fontName: 'Helvetica Neue', fontSize: 11 },
        barLabelStyle: { fontName: 'Garamond', fontSize: 10 } }
      };
      chart.draw(dataTable, options);
    }
