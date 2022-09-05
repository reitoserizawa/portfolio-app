class ContactSerializer < ActiveModel::Serializer
  attributes :id, :name, :subject, :details
end
