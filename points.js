const points = [{ name: "Ansible / AWX", ring: "adopt", quadrant: "Tools", moved: FALSE },
{ name: "Argo CD", ring: "adopt", quadrant: "Tools", moved: FALSE },
{ name: "Argo Workflows", ring: "assess", quadrant: "Tools", moved: TRUE },
{ name: "GCP Artifact Registry", ring: "adopt", quadrant: "Tools", moved: FALSE },
{ name: "GCP Cloud Logging", ring: "adopt", quadrant: "Tools", moved: FALSE },
{ name: "GCP Cloud Monitoring", ring: "adopt", quadrant: "Tools", moved: FALSE },
{ name: "GCP Cloud Profiler", ring: "adpot", quadrant: "tools", moved: FALSE },
{ name: "GCP Cloud Trace", ring: "adopt", quadrant: "Tools", moved: FALSE },
{ name: "GCP Container Registry", ring: "hold", quadrant: "Tools", moved: FALSE },
{ name: "Git", ring: "adopt", quadrant: "Tools", moved: FALSE },
{ name: "GitLab", ring: "adopt", quadrant: "Tools", moved: FALSE },
{ name: "GitLab CI", ring: "adopt", quadrant: "Tools", moved: FALSE },
{ name: "Grafana", ring: "adopt", quadrant: "Tools", moved: FALSE },
{ name: "Graphite", ring: "hold", quadrant: "Tools", moved: FALSE },
{ name: "Sentry", ring: "adopt", quadrant: "Tools", moved: FALSE },
{ name: "Statsd", ring: "hold", quadrant: "Tools", moved: FALSE },
{ name: "Hashicorp Terraform", ring: "adopt", quadrant: "Tools", moved: FALSE },
{ name: "Lighthouse CI", ring: "adopt", quadrant: "Tools", moved: FALSE },
{ name: "Transifex", ring: "adopt", quadrant: "Tools", moved: FALSE },
{ name: "nvm", ring: "adopt", quadrant: "Tools", moved: FALSE },
{ name: "yarn", ring: "adopt", quadrant: "Tools", moved: FALSE },
{ name: "poetry ", ring: "adopt", quadrant: "Tools", moved: TRUE },
{ name: "pipenv", ring: "hold", quadrant: "Tools", moved: FALSE },
{ name: "Fabric", ring: "adopt", quadrant: "Tools", moved: FALSE },
{ name: "Sphinx", ring: "adopt", quadrant: "Tools", moved: FALSE },
{ name: "JWT", ring: "adopt", quadrant: "Tools", moved: FALSE },
{ name: "mypy", ring: "adopt", quadrant: "Tools", moved: TRUE },
{ name: "flake8", ring: "adopt", quadrant: "Tools", moved: FALSE },
{ name: "k6", ring: "adopt", quadrant: "Tools", moved: TRUE },
{ name: "Renovate Bot", ring: "trial", quadrant: "Tools", moved: TRUE },
{ name: "Apache", ring: "hold", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "Beanstalk", ring: "hold", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "Celery", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "Cloudflare", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "Docker", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "Elasticsearch", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "GCP Big Query", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "GCP Cloud DNS", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "GCP Cloud Functions", ring: "trial", quadrant: "Infrastructure & Platforms", moved: TRUE },
{ name: "GCP Cloud Run", ring: "assess", quadrant: "Infrastructure & Platforms", moved: TRUE },
{ name: "GCP Cloud SQL MySQL", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "GCP Cloud SQL PostgreSQL", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "GCP Cloud Scheduler", ring: "trial", quadrant: "Infrastructure & Platforms", moved: TRUE },
{ name: "GCP Cloud Storage", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "GCP Compute Engine", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "GCP Firebase", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "GCP Datastore / Firestore", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "GCP Kubernetes Engine", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "GCP Load Balancing", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "GCP Memorystore Redis", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "GCP Pub/Sub", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "GCP Vertex AI", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: TRUE },
{ name: "Keycloak", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "KVM", ring: "hold", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "Mandrill", ring: "hold", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "Nginx", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "OpenVPN Cloud", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: TRUE },
{ name: "Percona MongoDB", ring: "hold", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "Percona MySQL", ring: "hold", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "Postfix", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "c", ring: "hold", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "SendGrid", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "Sophos Firewall", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "Solr", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "Hashicorp Vault", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "Airflow", ring: "adopt", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "Microsoft SQL Server", ring: "hold", quadrant: "Infrastructure & Platforms", moved: FALSE },
{ name: "Python", ring: "adopt", quadrant: "Languages & Frameworks", moved: FALSE },
{ name: "PHP", ring: "adopt", quadrant: "Languages & Frameworks", moved: FALSE },
{ name: "TypeScript", ring: "adopt", quadrant: "Languages & Frameworks", moved: FALSE },
{ name: "JavaScript", ring: "adopt", quadrant: "Languages & Frameworks", moved: FALSE },
{ name: "golang", ring: "assess", quadrant: "Languages & Frameworks", moved: TRUE },
{ name: "Django", ring: "adopt", quadrant: "Languages & Frameworks", moved: FALSE },
{ name: "Django rest framework", ring: "adopt", quadrant: "Languages & Frameworks", moved: FALSE },
{ name: "Node", ring: "adopt", quadrant: "Languages & Frameworks", moved: FALSE },
{ name: "React", ring: "adopt", quadrant: "Languages & Frameworks", moved: FALSE },
{ name: "SASS", ring: "adopt", quadrant: "Languages & Frameworks", moved: FALSE },
{ name: "Tailwind CSS", ring: "adopt", quadrant: "Languages & Frameworks", moved: TRUE },
{ name: "Storybook", ring: "adopt", quadrant: "Languages & Frameworks", moved: FALSE },
{ name: "jQuery", ring: "hold", quadrant: "Languages & Frameworks", moved: FALSE },
{ name: "bash", ring: "adopt", quadrant: "Languages & Frameworks", moved: FALSE },
{ name: "Flask ", ring: "adopt", quadrant: "Languages & Frameworks", moved: FALSE },
{ name: "fastAPI", ring: "adopt", quadrant: "Languages & Frameworks", moved: TRUE },
{ name: "Selenium webdriver", ring: "adopt", quadrant: "Languages & Frameworks", moved: FALSE },
{ name: "pytest", ring: "adopt", quadrant: "Languages & Frameworks", moved: FALSE },
{ name: "CoffeeScript", ring: "hold", quadrant: "Languages & Frameworks", moved: FALSE },
{ name: "Vue.JS", ring: "hold", quadrant: "Languages & Frameworks", moved: TRUE },
{ name: "Ember.js", ring: "hold", quadrant: "Languages & Frameworks", moved: FALSE },
{ name: "sqlalchemy", ring: "adopt", quadrant: "Languages & Frameworks", moved: TRUE },
{ name: "alembic", ring: "adopt", quadrant: "Languages & Frameworks", moved: TRUE },
{ name: "pinject", ring: "adopt", quadrant: "Languages & Frameworks", moved: TRUE },
{ name: "Zero Trust", ring: "assess", quadrant: "Techniques", moved: FALSE },
{ name: "GitOps", ring: "adopt", quadrant: "Techniques", moved: FALSE },
{ name: "Scrum", ring: "adopt", quadrant: "Techniques", moved: FALSE },
{ name: "Code review", ring: "adopt", quadrant: "Techniques", moved: FALSE },
{ name: "TDD", ring: "adopt", quadrant: "Techniques", moved: FALSE },
{ name: "Peer programming", ring: "adopt", quadrant: "Techniques", moved: FALSE },
{ name: "Clean Architecture / DDD", ring: "adopt", quadrant: "Techniques", moved: FALSE },
]