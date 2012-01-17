<?php

function header_page($major) {
    ?>
        <div id="header">
            <div id="headerimg"></div>
            <ul id="headermainnav" class="menu <?=$major?>">
                <li class="homelink""><a target="_top" href="/">JansTree</a></li>
                <li id="isaacsnav"><a <?=('isaacs' == $major) ? 'class="selected"' : ''?> target="_top" href="/IsaacsHome.htm">ISAACS</a></li>
                <li id="allennav"><a <?=('allen' == $major) ? 'class="selected"' : ''?> target="_top" href="/AllenHome.html">ALLEN</a></li>
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

function header_crumb($major, $current) {
    if ('isaacs' == $major) {
        $navoptions = array(
            array('ISAACS', '/IsaacsHome.htm', 'first'),
            array('CENSUS DATA', '/index_census.html', ''),
            array('CIVIL WAR', '/LinkCWIsaacs.htm'),
            array('BIOGRAPHIES', '/LinkBiographicalsketches.htm'),
        );
    } else if ('allen' == $major) {
        $navoptions = array(
            array('ALLEN', '/AllenHome.html', 'first'),
            array('CIVIL REGISTRATION', '/allen/civilregistration.html'),
            array('DOCUMENTS', '/allen/documents.html'),
            array('ALBUM', '/allen.html'),
        );
    } else {
        return;
    }
    print '<ul class="menu submenu '.$major.'sub">';
    foreach ($navoptions as $nav) {
        $selected = ($current == $nav[0]) ? 'selected' : '';
        print "<li class=\"".$nav[2]."\"><a class=\"".$selected."\" target=\"_top\" href=\"" . $nav[1] . "\">".$nav[0]."</a></li>";
    }
    print '</ul>';    
}

?>
