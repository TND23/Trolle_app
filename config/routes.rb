TrolleApp::Application.routes.draw do
  resources :users, :only => [:show] do
    resources :boards, :only => [:create, :show, :index]
  end
  
  resources :users, :only => [:create, :new]
  
  resources :boards, :only => [:edit, :update, :destroy] do
    resources :lists, :only => [:show, :create]
  end
  
  resources :lists, :only => [:edit, :update] do
    resources :cards
  end
  
  resource :session, :only => [:create, :destroy, :new]
  
  root to: "root#root"
end
