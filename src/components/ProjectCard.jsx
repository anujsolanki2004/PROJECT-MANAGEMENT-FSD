import React from 'react';
import Button from './Button';

const ProjectCard = ({ project, onSelect, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">
              Tasks: {project.tasks?.length || 0}
            </span>
            <span className="text-sm text-gray-500">
              • Due: {new Date(project.dueDate).toLocaleDateString()}
            </span>
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={() => onSelect(project.id)}
              variant="outline"
              className="text-sm"
            >
              View
            </Button>
            <Button
              onClick={() => onDelete(project.id)}
              variant="danger"
              className="text-sm"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
