window.WIREFRAME = window.WIREFRAME || {}
window.WIREFRAME.browser = do ($ = jQuery)->
	_export = ()->
		return
	# 初期化
	_export.init = ( __opt )->
		if( __opt.hideaddressbar )
				_export.hideaddressbar()

		_export.checkDevice()

		$("footer")
			.find(".pagetop")
			.on("click", 
				(e)->
					_export.pagetop()
					return
			)
		return

	# アドレスバーを隠す
	_export.hideaddressbar = ()->
		setTimeout(
			()->
				scrollTo(0,1)
				return
			, 100)
		return

	# android/iOSを判別
	_export.checkDevice = ()->
		__device = null

		if( navigator.userAgent.indexOf('Android') > 0 )
			__device = "android"
		else if( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPod') > 0 )
			__device = "ios"

		$("body").attr("data-device", __device)

		return __device


	# ページトップへ
	_export.pagetop = ()->
		$('html,body').animate({ scrollTop: 0 }, 'slow')
		return

	return _export