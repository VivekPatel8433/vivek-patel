pipeline {
    agent any
    tools {
        nodejs 'NodeJS-22'
    }
    stages {
        stage('Build') {
            steps {
                dir('vivek-patel') {
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                dir('vivek-patel') {
                    sh 'npm test -- --watchAll=false'
                }
            }
        }
    }
}