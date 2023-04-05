pipeline {
    agent any

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