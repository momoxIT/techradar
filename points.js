const points = [{ name: "Airflow", ring: "Trial",quadrant: "Tools" },
{ name: "Alertmanager", ring: "Adopt",quadrant: "Tools" },
{ name: "Ansible", ring: "Adopt",quadrant: "Tools" },
{ name: "AppCenter", ring: "Adopt",quadrant: "Tools" },
{ name: "Aquasec", ring: "Adopt",quadrant: "Tools" },
{ name: "Atlantis", ring: "Trial",quadrant: "Tools" },
{ name: "AWS Cloudfront", ring: "Adopt",quadrant: "Tools" },
{ name: "AWS CloudWatch ", ring: "Trial",quadrant: "Tools" },
{ name: "AWS DynamoDB", ring: "Adopt",quadrant: "Data" },
{ name: "AWS ECS", ring: "Hold",quadrant: "Infrastructure" },
{ name: "AWS EKS", ring: "Assess",quadrant: "Infrastructure" },
{ name: "AWS Elastic Beanstalk", ring: "Hold",quadrant: "Infrastructure" },
{ name: "AWS Elasticache (Redis)", ring: "Adopt",quadrant: "Data" },
{ name: "AWS Glue", ring: "Assess",quadrant: "Tools" },
{ name: "AWS guardduty", ring: "Adopt",quadrant: "Tools" },
{ name: "AWS Lambda", ring: "Adopt",quadrant: "Infrastructure" },
{ name: "AWS MSK (Kafka)", ring: "Assess",quadrant: "Data" },
{ name: "AWS OpenSearch", ring: "Adopt",quadrant: "Data" },
{ name: "AWS RDS", ring: "Adopt",quadrant: "Data" },
{ name: "AWS S3", ring: "Adopt",quadrant: "Data" },
{ name: "AWS SecretsManager", ring: "Adopt",quadrant: "Data" },
{ name: "AWS SNS", ring: "Adopt",quadrant: "Data" },
{ name: "AWS SQS", ring: "Adopt",quadrant: "Data" },
{ name: "Bitrise", ring: "Adopt",quadrant: "Tools" },
{ name: "Bitsight", ring: "Adopt",quadrant: "Tools" },
{ name: "Braze", ring: "Adopt",quadrant: "Tools" },
{ name: "Calico", ring: "Adopt",quadrant: "Infrastructure" },
{ name: "Consul", ring: "Hold",quadrant: "Infrastructure" },
{ name: "Contentful", ring: "Adopt",quadrant: "Tools" },
{ name: "CoreDNS", ring: "Adopt",quadrant: "Infrastructure" },
{ name: "Debezium", ring: "Adopt",quadrant: "Tools" },
{ name: "Docker", ring: "Adopt",quadrant: "Infrastructure" },
{ name: "ElasticSearch ", ring: "Trial",quadrant: "Data" },
{ name: "Elk", ring: "Adopt",quadrant: "Tools" },
{ name: "ESET", ring: "Adopt",quadrant: "Infrastructure" },
{ name: "ExpressJS", ring: "Adopt",quadrant: "Languages & Frameworks" },
{ name: "ExtJs", ring: "Hold",quadrant: "Languages & Frameworks" },
{ name: "Fastify", ring: "Trial",quadrant: "Languages & Frameworks" },
{ name: "Filebeat", ring: "Adopt",quadrant: "Infrastructure" },
{ name: "Fivetran", ring: "Assess",quadrant: "Tools" },
{ name: "FluentD", ring: "Hold",quadrant: "Infrastructure" },
{ name: "Flutter", ring: "Assess",quadrant: "Languages & Frameworks" },
{ name: "Gearman", ring: "Hold",quadrant: "Tools" },
{ name: "GitLab", ring: "Adopt",quadrant: "Tools" },
{ name: "GoLang ", ring: "Assess",quadrant: "Languages & Frameworks" },
{ name: "Google Analytics", ring: "Adopt",quadrant: "Tools" },
{ name: "Google Firebase", ring: "Adopt",quadrant: "Tools" },
{ name: "Google Optimize", ring: "Adopt",quadrant: "Tools" },
{ name: "Google Tag Manager", ring: "Adopt",quadrant: "Tools" },
{ name: "Grafana", ring: "Adopt",quadrant: "Tools" },
{ name: "Groovy", ring: "Adopt",quadrant: "Languages & Frameworks" },
{ name: "Handlebars", ring: "Hold",quadrant: "Tools" },
{ name: "handsontable", ring: "Hold",quadrant: "Tools" },
{ name: "Hashicorp Vault", ring: "Assess",quadrant: "Infrastructure" },
{ name: "Helm", ring: "Adopt",quadrant: "Infrastructure" },
{ name: "Javascript", ring: "Adopt",quadrant: "Languages & Frameworks" },
{ name: "Jenkins", ring: "Hold",quadrant: "Tools" },
{ name: "Jupyter notebook", ring: "Adopt",quadrant: "Tools" },
{ name: "Kiam", ring: "Adopt",quadrant: "Tools" },
{ name: "Kibana", ring: "Adopt",quadrant: "Tools" },
{ name: "Kotlin", ring: "Adopt",quadrant: "Languages & Frameworks" },
{ name: "Kotlin native", ring: "Assess",quadrant: "Languages & Frameworks" },
{ name: "Kubernetes", ring: "Adopt",quadrant: "Infrastructure" },
{ name: "Laravel", ring: "Assess",quadrant: "Languages & Frameworks" },
{ name: "Logstash", ring: "Adopt",quadrant: "Tools" },
{ name: "Lumen", ring: "Assess",quadrant: "Languages & Frameworks" },
{ name: "Maxmind Geolite2", ring: "Trial",quadrant: "Tools" },
{ name: "Memcached ", ring: "Hold",quadrant: "Data" },
{ name: "Microsoft SQL", ring: "Trial",quadrant: "Data" },
{ name: "Monday.com", ring: "Trial",quadrant: "Tools" },
{ name: "MongoDB ", ring: "Hold",quadrant: "Data" },
{ name: "MS Header Analyzer", ring: "Adopt",quadrant: "Tools" },
{ name: "MS Security Center", ring: "Adopt",quadrant: "Infrastructure" },
{ name: "MySQL", ring: "Hold",quadrant: "Data" },
{ name: "NestJS", ring: "Assess",quadrant: "Languages & Frameworks" },
{ name: "New Relic", ring: "Adopt",quadrant: "Tools" },
{ name: "Next.js", ring: "Trial",quadrant: "Languages & Frameworks" },
{ name: "Nexus ", ring: "Adopt",quadrant: "Tools" },
{ name: "Nginx", ring: "Assess",quadrant: "Infrastructure" },
{ name: "NodeJS", ring: "Adopt",quadrant: "Languages & Frameworks" },
{ name: "Objective-C", ring: "Hold",quadrant: "Languages & Frameworks" },
{ name: "OneLogin", ring: "Adopt",quadrant: "Infrastructure" },
{ name: "OpenAPI (Swagger)", ring: "Adopt",quadrant: "Tools" },
{ name: "OpsGenie", ring: "Adopt",quadrant: "Tools" },
{ name: "Pact", ring: "Adopt",quadrant: "Tools" },
{ name: "PHP", ring: "Adopt",quadrant: "Languages & Frameworks" },
{ name: "Phpunit", ring: "Adopt",quadrant: "Tools" },
{ name: "PO Editor", ring: "Adopt",quadrant: "Tools" },
{ name: "PostgreSQL", ring: "Adopt",quadrant: "Data" },
{ name: "Prometheus", ring: "Adopt",quadrant: "Tools" },
{ name: "Puppet", ring: "Hold",quadrant: "Infrastructure" },
{ name: "Python", ring: "Assess",quadrant: "Languages & Frameworks" },
{ name: "RabbitMQ", ring: "Adopt",quadrant: "Data" },
{ name: "React", ring: "Adopt",quadrant: "Languages & Frameworks" },
{ name: "RealityKit 2", ring: "Assess",quadrant: "Languages & Frameworks" },
{ name: "Recoil.js", ring: "Assess",quadrant: "Languages & Frameworks" },
{ name: "Redux", ring: "Assess",quadrant: "Languages & Frameworks" },
{ name: "Report Portal", ring: "Trial",quadrant: "Tools" },
{ name: "Retool", ring: "Adopt",quadrant: "Tools" },
{ name: "Robot Framework (E2E testing library)", ring: "Adopt",quadrant: "Tools" },
{ name: "RxSwift", ring: "Adopt",quadrant: "Languages & Frameworks" },
{ name: "Scala", ring: "Adopt",quadrant: "Languages & Frameworks" },
{ name: "Selenoid/Moon", ring: "Trial",quadrant: "Tools" },
{ name: "Snowflake ", ring: "Adopt",quadrant: "Data" },
{ name: "SonarQube", ring: "Trial",quadrant: "Tools" },
{ name: "Swift", ring: "Adopt",quadrant: "Languages & Frameworks" },
{ name: "Symfony ", ring: "Adopt",quadrant: "Languages & Frameworks" },
{ name: "Tableau", ring: "Adopt",quadrant: "Data" },
{ name: "Tenable", ring: "Adopt",quadrant: "Tools" },
{ name: "Terraform", ring: "Adopt",quadrant: "Languages & Frameworks" },
{ name: "Terraform Cloud", ring: "Assess",quadrant: "Tools" },
{ name: "TypeScript", ring: "Adopt",quadrant: "Languages & Frameworks" },
{ name: "Umbrella", ring: "Adopt",quadrant: "Infrastructure" },
{ name: "Vector", ring: "Trial",quadrant: "Infrastructure" },
{ name: "Virustotal", ring: "Adopt",quadrant: "Tools" },
{ name: "WebdriverIO", ring: "Adopt",quadrant: "Languages & Frameworks" },
{ name: "Wordpress", ring: "Hold",quadrant: "Tools" },
{ name: "Yii", ring: "Hold",quadrant: "Languages & Frameworks" },
]