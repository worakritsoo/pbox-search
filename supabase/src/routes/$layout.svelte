<script>
import Menu from "../lib/components/menu.svelte";

</script>
<body>
        
        <ion-split-pane content-id="menu-content" when="lg">
            <ion-menu content-id="menu-content" side="start" type="overlay">
                <Menu></Menu>
            </ion-menu>
            <div class="ion-page" id="menu-content" color="light">
                <ion-content>
                    <slot>1</slot>
                </ion-content>
            </div>
        </ion-split-pane>   
        
    </body>
    