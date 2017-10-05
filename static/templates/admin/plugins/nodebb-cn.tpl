<form role="form" class="quickstart-settings">
	<div class="row">
		<div class="col-sm-2 col-xs-12 settings-header">NodeBB 中国本地化..</div>
		<div class="col-sm-10 col-xs-12">
			<p class="lead">
				目前发信接口使用的是:阿里大于（阿里云通信），仅用于实名验证，不支持短信通知。封禁文本目前使用的自己的算法，可能会存在一定的性能问题，敬请谅解！<br />
				我们未来会接入其他的接口，同时会开放短信通知等服务，但这可能收取你1-2顿大餐的金额（预计300-500/year）。购买该计划将会获得以后为该计划推出的所有插件（类似微软的订阅机制）。开放订阅时间请关注中文社区。
			</p>
			<h1>阿里大于</h1>
			<div class="form-group">
				<label for="appid">AppID</label>
				<input type="text" id="appid" name="appid" title="AppID" class="form-control" placeholder="AppID">
			</div>
			<div class="form-group">
				<label for="appkey">AppKey</label>
				<input type="text" id="appkey" name="appkey" title="AppKey" class="form-control" placeholder="AppKey">
			</div>
			<h1>禁止文本，请使用英文逗号(,)作为分割符</h1>
			<div class="form-group">
				<label for="bantext">禁止文本</label>
				<input type="textarea" id="bantext" name="bantext" title="bantext" class="form-control" placeholder="例如:(民主,独立)">
			</div>
		</div>
	</div>
</form>

<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
	<i class="material-icons">save</i>
</button>