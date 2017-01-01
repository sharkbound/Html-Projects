<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <div>
            <label id="change">I Will Change!</label>
            <br />
            <button onclick="test()" type="button"><h2>Test()</h2></button>
            <br />
            <button draggable="true" onclick="popup('test from popup()')" type="button">Js1.js1test()</button>
            <br />
            <input type="text" id="textInput" oninput="setLableText()" placeholder="Input text...">
        </div>
    </div>
    </form>
</body>
</html>
<script type="text/javascript">
    function test() {
        alert("from from test.test()");
    }
</script>
<script src="../js/Js1.js"></script>
