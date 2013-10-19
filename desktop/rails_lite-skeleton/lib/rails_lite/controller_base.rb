require 'erb'
require_relative 'params'
require_relative 'session'

class ControllerBase
  attr_reader :params

  def initialize(req, res, &route_params)
    @req = req
    @res = res
  end
# Write a method ControllerBase#session 
# which parses the request and constructs a session from it.
# Cache this in an ivar, (@session; use ||=) that can be returned
# on subsequent calls to #session.

# Add calls to Session#store_session in redirect_to and 
# render_content so that the cookie is set.
  def session
    @session ||= Session.new(@req)
  end

  def already_rendered?
  end

  def redirect_to(url)
    @res.status = 302
    if @session
      @session.store_session(@res)
    end
    @res.header['location'] = url #rails black magic
    @already_built_response = true
  end

  def render_content(content, type)
    if @session
      @session.store_session(@res)
    end
    @res.body = content
    @res.content_type=(type)
    @already_built_response = true
  end

  def render(template_name)
    controller_name = self.class.to_s.underscore
   #p "======================================================================================================================================================================================================================="
    a_file = File.read("views/#{controller_name}/#{template_name}.html.erb")
    erb_file = ERB.new(a_file)
    content = erb_file.result(binding)
    p content
    
    render_content(content, "text/text")
  end

  def invoke_action(name)
  end
end
