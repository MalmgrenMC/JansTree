<?php

function header_page($major) {
    ?>
        <div id="header">
            <div id="headerimg"></div>
            <h1><a href="/">JansTree</a></h1>
            <ul id="headermainnav">
                <li id="isaacsnav" <?=('isaacs' == $major) ? 'class="selected"' : ''?>><a target="_top" href="/IsaacsHome.htm">ISAACS</a></li>
                <li id="allennav" <?=('allen' == $major) ? 'class="selected"' : ''?>><a href="/allen.html">ALLEN</a></li>
            </ul>
        </div>
    <?
}

function head() {
    ?>
<link rel="stylesheet" type="text/css" href="/janstree.css" /> 
<script src="http://www.google-analytics.com/urchin.js" type="text/javascript">
</script>
<script type="text/javascript">
_uacct = "UA-755263-1";
urchinTracker();
</script>
    <?
}

function header_crumb($major, $selected) {
    if ('isaacs' == $major) {
        $navoptions = array(
            array('ISAACS', '', 'first'),
            array('CENSUS DATA', ''),
            array('CIVIL WAR', ''),
            array('BIOGRAPHIES', ''),
        );
    } else if ('allen' == $major) {
        return;
    } else {
        return;
    }
    print '<ul id="header_crumb" class="'.$major.'">';
    foreach ($navoptions as $nav) {
        $selected = ($selected == $nav[0]) ? 'selected' : '';
        print "<li class=\"".$nav[2]." " . $selected . "\"><a href=\"" . $nav[1] . "\">".$nav[0]."</a></li>";
    }
    print '</ul>';    
}

?>
