<?php

function header_page($major) {
    ?>
        <div id="header">
            <div id="headerimg"></div>
            <ul id="headermainnav" class="menu <?=$major?>">
                <li class="homelink""><a target="_top" href="/">JansTree</a></li>
                <li id="isaacsnav"><a <?=('isaacs' == $major) ? 'class="selected"' : ''?> target="_top" href="/isaacs/">ISAACS</a></li>
                <li id="allennav"><a <?=('allen' == $major) ? 'class="selected"' : ''?> target="_top" href="/allen/">ALLEN</a></li>
            </ul>
        </div>
    <?
}

function head() {
    ?>
    <link rel="stylesheet" type="text/css" href="/janstree.css" /> 
    <script src="http://www.google-analytics.com/urchin.js" type="text/javascript"></script>
    <script type="text/javascript">
        _uacct = "UA-755263-1";
        urchinTracker();
    </script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function(){
            $(".stripeMe tr").mouseover(function(){$(this).addClass("over");}).mouseout(function(){$(this).removeClass("over");});
            $(".stripeMe tr:even").addClass("alt");
        });
    </script>
    <?
}

function header_crumb($major, $current) {
    if ('isaacs' == $major) {
        $navoptions = array(
            array('ISAACS', '/isaacs/', 'first'),
            array('CENSUS DATA', '/isaacs/census/', ''),
            array('CIVIL WAR', '/isaacs/civilwar/', ''),
            array('BIOGRAPHIES', '/isaacs/biographies/', ''),
            array('VITAL RECORDS', '/isaacs/vitalrecords/', ''),
        );
    } else if ('allen' == $major) {
        $navoptions = array(
            array('ALLEN', '/allen/', 'first'),
            array('ALBUM', '/allen/album.html', ''),
            array('CIVIL REGISTRATION', '/allen/civilregistration/', ''),
            array('CORRESPONDENCE', '/allen/correspondence/', ''),
            array('DOCUMENTS', '/allen/documents.html', ''),
            array('PICTURES', '/allen/pictures.html', ''),
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
