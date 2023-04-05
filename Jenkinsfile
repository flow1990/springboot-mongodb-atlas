pipeline {
    agent any
    tools {
        nodejs "nodejs"
    }
    stages {

        stage('Serving'){
            steps{
                script{
                    sh "ng serve"
                }
            }
        }
    }
}