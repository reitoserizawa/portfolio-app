class ContactsController < ApplicationController
    def index 
        render json: Contact.all, status: :ok
    end
    
    def show
        contact = find_contact
        render json: contact, status: :ok
    end

    def create
        contact = Contact.create!(contact_params)
        render json: contact, status: :created
    end

    private

    def find_contact
        contact = Contact.find(params[:id])
    end

    def contact_params
        params.permit(:name, :email, :subject, :details)
    end
end
