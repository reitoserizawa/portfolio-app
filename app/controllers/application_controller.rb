class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    private

    def record_invalid (e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end
end
