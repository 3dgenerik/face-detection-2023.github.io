import axios from "axios"

export const fetchDetectionData = (url:string, image_url:string, user_id:string, app_id: string, PAT:string) => {
    const bodyData = {
        user_app_id: {
            user_id: user_id,
            app_id: app_id
        },
        inputs: [
            {
                data: {
                    image: {
                        url: image_url
                    }
                }
            }
        ]
    }

    return axios.post(url, bodyData, {
        headers: {
            Accept: "application/json",
            Authorization: 'Key ' + PAT
        },
    })
}