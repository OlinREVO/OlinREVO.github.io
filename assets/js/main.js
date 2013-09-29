window.addEvent('load', function() {
				new JCaption('img.caption');
			});
if (typeof RokBoxSettings == 'undefined') RokBoxSettings = {pc: '100'}
window.addEvent('domready', function() {new GantrySmartLoad({'offset': {'x': 200, 'y': 200}, 'placeholder': '/templates/rt_fracture/images/blank.gif', 'exclusion': ['']}); });
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-36263707-1']);
	_gaq.push(['_trackPageview']);

	(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
	
            window.addEvent('domready', function() {
                new Fusion('ul.menutop', {
                    effect: 'slide and fade',
                    opacity:  1,
                    hideDelay:  500,
                    centered:  0,
                    tweakInitial: {'x': -8, 'y': -18},
                    tweakSubsequent: {'x':  -8, 'y':  -11},
                    tweakSizes: {'width': 20, 'height': 20},
                    menuFx: {duration:  300, transition: Fx.Transitions.Quint.easeOut}
                });
            });
            

			window.addEvent('domready', function(){
				document.getElements('[data-rt-menu-mobile]').addEvent('change', function(){
					window.location.href = this.value;
				});
			});


if (typeof RokSprocket == 'undefined') RokSprocket = {};
Object.merge(RokSprocket, {
	SiteURL: 'http://olinrevo.org/',
	CurrentURL: 'http://olinrevo.org/',
	AjaxURL: 'http://olinrevo.org/index.php?option=com_roksprocket&amp;task=ajax&amp;format=raw&amp;ItemId=101'
});

window.addEvent('domready', function(){
		RokSprocket.instances.mosaic = new RokSprocket.Mosaic();
});

window.addEvent('domready', function(){
	RokSprocket.instances.mosaic.attach(91, '{"pages":1,"animations":["fade","scale","rotate"],"displayed":[2,4,1,3]}');
});
window.addEvent('load', function(){
   RokSprocket.instances.mosaic.mosaic['id-91'].reload();
});
