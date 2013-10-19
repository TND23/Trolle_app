require 'json'
require 'webrick'

class Session
  def initialize(req)
  	@curr_cookie = {}
  	req.cookies.each do |cookie| #request has a built in cookies attributes
  		if cookie.name == '_rails_lite_app'
  			@curr_cookie = JSON.parse(cookie.value)
  		end
  	end
  end

  def [](key)
  	@curr_cookie[key]
  end

  def []=(key, val)
 	@curr_cookie[key] = val
  end

  def store_session(res)
  	res.cookies <<  WEBrick::Cookie.new('_rails_lite_app', @curr_cookie.to_json)
  end

end
