pipeline {
    agent any
    tools {
        nodejs "nodejs"
    }
    stages {
        stage('npm install'){
            steps{
                script{
                    sh "npm install"
                }
            }
        }

        stage('Serving'){
            steps{
                script{
                    sh "ng serve"
                }
            }
        }
    }
}